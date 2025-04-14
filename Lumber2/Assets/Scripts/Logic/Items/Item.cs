using System;
using UnityEngine;

namespace Logic.Items
{
    public class Item : MonoBehaviour, IItem
    {
        public GameObject GameObject;
        
        [SerializeField] private float _duration;

        private void Awake()
        {
            GameObject = this.gameObject;
        }

        public virtual void Take(Transform position)
        {
        
        }

        public virtual void Drop(Transform position)
        {
        
        }
    }
}