using System;
using UnityEngine;

public class Item : IItem
{
    [SerializeField] private float _duration;
    
    public virtual void Take(Transform position)
    {
        
    }

    public virtual void Drop(Transform position)
    {
        
    }
}