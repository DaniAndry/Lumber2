using System.Collections.Generic;
using Logic.Points;
using UnityEngine;

namespace Logic.Items
{
    public abstract class MovePoints : MonoBehaviour
    {
        [SerializeField] protected List<ItemMovePoint> Points;
        

        public IPoint TryToMove()
        {
            return FindFirstAvailablePoint();
        }

        public IPoint ReplaceItemOnPoint()
        {
            return FindFirstOccupiedPoint();
        }

        public int GetCount()
        {
            if (Points == null)
            {
                // Debug.LogError($"[{GetType().Name}] Points list is null in GetCount!");
                return 0;
            }
            return Points.Count;
        }
        
        private IPoint FindFirstAvailablePoint()
        {
            if (Points == null || Points.Count == 0)
            {
                // Debug.LogError($"[{GetType().Name}] Cannot find available point - Points list is null or empty");
                return null;
            }
            
            foreach (var point in Points)
            {
                if (point == null)
                {
                    // Debug.LogError($"[{GetType().Name}] Null point in Points list!");
                    continue;
                }
                
                if (!point.IsBusy)
                {
                    return point;
                }
            }

            return null;
        }

        private IPoint FindFirstOccupiedPoint()
        {
            if (Points == null || Points.Count == 0)
            {
                // Debug.LogError($"[{GetType().Name}] Cannot find occupied point - Points list is null or empty");
                return null;
            }
            
            foreach (var point in Points)
            {
                if (point == null)
                {
                    // Debug.LogError($"[{GetType().Name}] Null point in Points list!");
                    continue;
                }
                
                if (point.IsBusy)
                {
                    return point;
                }
            }

            return null;
        }
    }
}