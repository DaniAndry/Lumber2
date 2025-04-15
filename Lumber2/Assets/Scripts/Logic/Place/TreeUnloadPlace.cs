using Logic.Items;
using System.Collections;
using UnityEngine;

namespace Logic.Place
{
    public class TreeUnloadPlace : UnloadPlace
    {
        [SerializeField] private float _rewardAmount = 10f;
        [SerializeField] private ItemSpawner _itemSpawner;
        
        public override void Unload()
        {
            base.Unload();
            Debug.Log($"Tree unload place ready for logs");
        }
        
        // Переопределяем UnloadItems для прямого перемещения деревьев в TargetUsePoint
        protected override IEnumerator UnloadItems()
        {
            int unloadedCount = 0;
            
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
                    GameObject movingObject = _point.Item.GameObject;

                    if (IsValidItemType(movingObject))
                    {
                        // Для деревьев сразу перемещаем в TargetUsePoint
                        _point.ReleasePoint();
                        movingObject.transform.parent = _targetUsePoint;
                        
                        // Перемещаем напрямую в точку использования
                        _itemMover.Move(movingObject, _targetUsePoint);
                        unloadedCount++;
                        
                        // Добавляем награду за разгрузку дерева
                        Debug.Log($"Tree processing completed! Reward: {_rewardAmount}");
                    }
                    else
                    {
                        Debug.LogWarning($"Cannot unload item {movingObject.name}: invalid type for {GetAcceptedItemType()} unload place");
                    }
                }
            }
            
            Debug.Log($"Unloaded {unloadedCount} items of type {GetAcceptedItemType()}");
            
            _isUnloading = false;
            // Не используем MoveToUse, так как все объекты уже перемещены
        }
        
        protected override bool IsValidItemType(GameObject itemObject)
        {
            // Проверяем наличие компонента Tree на объекте
            return itemObject.GetComponent<Logic.Items.Tree>() != null || itemObject.name.Contains("Log");
        }
        
        // Возвращаем тип, который принимает эта точка разгрузки
        protected override ItemType GetAcceptedItemType()
        {
            return ItemType.Tree;
        }
    }
}