using System.Collections;
using Forklift;
using Logic.Items;
using Logic.Points;
using UnityEngine;
using UnityEngine.Serialization;

namespace Logic.Place
{
    public abstract class UnloadPlace : MonoBehaviour, IUnloadable
    {
        [SerializeField] protected ItemMovePoints _unloadPoints;
        [SerializeField] protected ForkliftMovePoints _forkliftPoints;
        [SerializeField] protected Transform _targetUsePoint;

        protected IPoint _targetPoint;
        protected IPoint _point;
        protected ItemMover _itemMover;
        protected readonly float _moveTime = 0.2f;

        private Coroutine _unloadCoroutine;
        private bool _isUnloading = false;

        private void OnTriggerStay(Collider other)
        {
            if (other.TryGetComponent<ForkliftMovePoints>(out ForkliftMovePoints movePoint) && !_isUnloading)
            {
                _itemMover = movePoint.Mover;
                _forkliftPoints = movePoint;
                Unload();
            }
        }

        private void OnTriggerExit(Collider other)
        {
            if (other.TryGetComponent<ForkliftMovePoints>(out _) && _unloadCoroutine != null)
            {
                StopCoroutine(_unloadCoroutine);
                _unloadCoroutine = null;
                _isUnloading = false;
                _forkliftPoints = null;
            }
        }

        public virtual void Unload()
        {
            if (!_isUnloading && _forkliftPoints != null)
            {
                _isUnloading = true;
                _unloadCoroutine = StartCoroutine(UnloadItems());
            }
        }

        protected virtual IEnumerator UnloadItems()
        {
            for (int i = 0; i < _forkliftPoints.GetCount(); i++)
            {
                yield return new WaitForSeconds(_moveTime);

                if (_forkliftPoints == null)
                {
                    _isUnloading = false;
                    yield break;
                }

                if (_forkliftPoints.ReplaceItemOnPoint() != null)
                {
                    _point = _forkliftPoints.ReplaceItemOnPoint();
                    _targetPoint = _unloadPoints.TryToMove();

                    if (_targetPoint != null)
                    {
                        GameObject movingObject = _point.Item.GameObject;
                        Transform targetTransform = _targetPoint.Transform;

                        _point.ReleasePoint();
                        movingObject.transform.parent = targetTransform;

                        _itemMover.Move(movingObject, targetTransform);

                        _targetPoint.TakePoint(movingObject);
                    }
                }
            }

            _isUnloading = false;
            StartCoroutine(MoveToUse());
        }

        protected virtual IEnumerator MoveToUse()
        {
            for (int i = 0; i < _unloadPoints.GetCount(); i++)
            {
                yield return new WaitForSeconds(0.1f);
                _point = _unloadPoints.ReplaceItemOnPoint();
                GameObject movingObject = _unloadPoints.ReplaceItemOnPoint().Item.GameObject;
                _point.ReleasePoint();

                movingObject.transform.parent = _targetUsePoint;
                Debug.Log(_itemMover, movingObject);
                _itemMover.Move(movingObject, _targetUsePoint);
            }
        }

        private void CompleteMove(GameObject movingObject)
        {
            Destroy(movingObject);
        }
    }
}