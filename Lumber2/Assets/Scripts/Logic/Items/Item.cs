using UnityEngine;

namespace Logic.Items
{
    public class Item : MonoBehaviour, IItem
    {
        [SerializeField] private float _duration;
    
        public virtual void Take(Transform position)
        {
        
        }

        public virtual void Drop(Transform position)
        {
        
        }
    }
}