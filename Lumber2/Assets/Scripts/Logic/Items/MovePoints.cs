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
            return Points.Count;
        }

        public int GetOccupiedCount()
        {
            int count = 0;
            foreach (var t in Points)
            {
                if (t.IsBusy)
                {
                    count++;
                }
            }

            return count;
        }

        private IPoint FindFirstAvailablePoint()
        {
            foreach (var point in Points)
            {
                if (!point.IsBusy)
                {
                    return point;
                }
            }

            return null;
        }

        private IPoint FindFirstOccupiedPoint()
        {
            foreach (var point in Points)
            {
                if (point.IsBusy)
                {
                    return point;
                }
            }

            return null;
        }
    }
}