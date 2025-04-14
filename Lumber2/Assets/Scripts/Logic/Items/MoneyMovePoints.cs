using System;

namespace Logic.Items
{
    public class MoneyMovePoints : MovePoints
    {
        private void Awake()
        {
            foreach (var point in Points)
            {
              point.TakePoint(point.gameObject);
            }
        }
    }
}