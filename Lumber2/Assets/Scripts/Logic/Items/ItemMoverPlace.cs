using System.Collections;
using Forklift;
using Logic.Points;
using UnityEngine;

namespace Logic.Items
{
    public class ItemMoverPlace : MonoBehaviour
    {
        [SerializeField] private ItemMovePoints _items;
        [SerializeField] private ForkliftMovePoints _targetItems;

        private IPoint _targetPoint;
        private IPoint _point;
        private ItemMover _itemMover;
        private readonly float _moveTime = 1f;

        private void OnTriggerStay(Collider other)
        {
            if (other.TryGetComponent<ForkliftMovePoints>(out ForkliftMovePoints movePoint))
            {
                _itemMover = movePoint.Mover;
                _targetItems = movePoint;
                StartCoroutine(Move());
            }
        }

        private IEnumerator Move()
        {
            for (int i = 0; i < _items.GetCount(); i++)
            {
                yield return new WaitForSeconds(_moveTime);
                if (_items.ReplaceItemOnPoint() != null)
                {
                    _point = _items.ReplaceItemOnPoint();
                    _targetPoint = _targetItems.TryToMove();

                    if (_targetPoint != null)
                    {
                        _itemMover.Move(_point.Item.GameObject, _targetPoint.Transform);
                        _point.ReleasePoint();
                        _point.Item.GameObject.transform.parent = _targetPoint.Transform;
                        _targetPoint.TakePoint(_point.Item.GameObject);
                    }
                }
            }
        }
        
        public void Unload()
        {
            throw new System.NotImplementedException();
        }

        public void Load()
        {
            throw new System.NotImplementedException();
        }
    }
}