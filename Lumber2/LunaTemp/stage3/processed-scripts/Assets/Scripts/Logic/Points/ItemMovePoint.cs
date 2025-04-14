using Logic.Items;
using UnityEngine;

namespace Logic.Points
{
    public class ItemMovePoint : MonoBehaviour, IPoint
    {
        public bool IsBusy { get; private set; }
        public Item Item { get; set; }
        public Transform Transform { get; private set; }

        private void Awake()
        {
            Item = new Item();
            Transform = GetComponent<Transform>();
        }

        public void TakePoint(GameObject gameObject)
        {
            Item.GameObject = gameObject;
            IsBusy = true;
        }

        public void ReleasePoint()
        {
            IsBusy = false;
        }
    }
}