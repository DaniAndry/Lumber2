﻿using Logic.Points;

namespace Logic.Items
{
    public interface IItems
    {
        void AddItem(Item item);
        void RemoveItem(Item item);
        ItemMover Mover { get; set; }
    }
}