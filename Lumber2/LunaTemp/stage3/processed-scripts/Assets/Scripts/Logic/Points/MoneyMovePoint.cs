using Logic.Items;
using UnityEngine;

namespace Logic.Points
{
    public class MoneyMovePoint : IPoint
    {
  
        public bool IsBusy { get; private set; }
        public Item Item { get; private set; }
        public Transform Transform { get; }

        public void TakePoint()
        {
  
        }

        public void TakePoint(GameObject gameObject)
        {
            throw new System.NotImplementedException();
        }

        public void ReleasePoint()
        {

        }
    }
}