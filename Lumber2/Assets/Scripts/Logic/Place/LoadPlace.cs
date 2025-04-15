using System.Collections;
using Forklift;
using Logic.Items;
using Logic.Points;
using UnityEngine;

namespace Logic.Place
{
    public abstract class LoadPlace : MonoBehaviour, ILoadable
    {
        [SerializeField] protected MovePoints _items;
        [SerializeField] protected ForkliftMovePoints _targetItems;

        protected IPoint _targetPoint;
        protected IPoint _point;
        protected ItemMover _itemMover;
        protected readonly float _moveTime = 0.2f;

        protected Coroutine _loadCoroutine;
        protected bool _isLoading = false;

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
                yield return new WaitForSeconds(0.1f);
                
                if (_targetItems == null)
                {
                    _isLoading = false;
                    yield break;
                }

                // Обработка для MoneyMovePoints
                if (_items is MoneyMovePoints)
                {
                    // Пытаемся найти денежный объект на исходной точке
                    _point = _items.ReplaceItemOnPoint();
                    _targetPoint = _targetItems.TryToMove();
                    
                    // Если нашли и исходную точку, и целевую
                    if (_point != null && _targetPoint != null)
                    {
                        GameObject movingObject = _point.Item.GameObject;
                        Transform targetTransform = _targetPoint.Transform;
                        
                        // Освобождаем исходную точку
                        _point.ReleasePoint();
                        movingObject.transform.parent = targetTransform;
                        
                        // Перемещаем объект
                        _itemMover.Move(movingObject, targetTransform);
                        
                        // Занимаем целевую точку
                        _targetPoint.TakePoint(movingObject);
                    }
                }
                // Стандартная обработка для физических объектов (дерево)
                else if (_items.ReplaceItemOnPoint() != null)
                {
                    _point = _items.ReplaceItemOnPoint();
                    _targetPoint = _targetItems.TryToMove();

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

            _isLoading = false;
        }
    }
}