using System.Collections.Generic;
using Logic.Points;
using UnityEngine;

namespace Logic.Items
{
    public class Items : MonoBehaviour, IItems
    {
       [SerializeField] private List<Item> _items;

       public void AddItem(Item item)
       {
           
       }

       public void RemoveItem(Item item)
       {
           
       }

       public ItemMover Mover { get; set; }
    }
}