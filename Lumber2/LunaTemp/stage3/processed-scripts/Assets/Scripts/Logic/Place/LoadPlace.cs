using System.Collections;
using Forklift;
using Logic.Items;
using Logic.Points;
using UnityEngine;

namespace Logic.Place
{
    public abstract class LoadPlace : MonoBehaviour, ILoadable
    {
        [SerializeField] protected ItemMovePoints _items;
        [SerializeField] protected ForkliftMovePoints _targetItems;

        protected IPoint _targetPoint;
        protected IPoint _point;
        protected ItemMover _itemMover;
        protected readonly float _moveTime = 0.2f;

        private Coroutine _loadCoroutine;
        private bool _isLoading = false;

        private void OnTriggerStay(Collider other)
        {
            if (other.TryGetComponent<ForkliftMovePoints>(out ForkliftMovePoints movePoint) && !_isLoading)
            {
                _itemMover = movePoint.Mover;
                _targetItems = movePoint;
                Load();
            }
        }

        private void OnTriggerExit(Collider other)
        {
            if (other.TryGetComponent<ForkliftMovePoints>(out _) && _loadCoroutine != null)
            {
                StopCoroutine(_loadCoroutine);
                _loadCoroutine = null;
                _isLoading = false;
                _targetItems = null;
            }
        }

        public virtual void Load()
        {
            if (!_isLoading && _targetItems != null)
            {
                _isLoading = true;
                _loadCoroutine = StartCoroutine(LoadItems());
            }
        }

        protected virtual IEnumerator LoadItems()
        {
            for (int i = 0; i < _items.GetCount(); i++)
            {
                yield return new WaitForSeconds(_moveTime);

                // Проверяем, что погрузчик все еще доступен
                if (_targetItems == null)
                {
                    _isLoading = false;
                    yield break;
                }

                if (_items.ReplaceItemOnPoint() != null)
                {
                    _point = _items.ReplaceItemOnPoint();
                    _targetPoint = _targetItems.TryToMove();

                    if (_targetPoint != null)
                    {
                        // Сохраняем объект и целевую точку для последующего использования
                        GameObject movingObject = _point.Item.GameObject;
                        Transform targetTransform = _targetPoint.Transform;
                        
                        // Сначала освобождаем точку и устанавливаем родителя
                        _point.ReleasePoint();
                        movingObject.transform.parent = targetTransform;
                        
                        // Запускаем анимированное перемещение
                        _itemMover.Move(movingObject, targetTransform);
                        
                        // Помечаем точку как занятую
                        _targetPoint.TakePoint(movingObject);
                    }
                }
            }

            _isLoading = false;
        }
    }
}