using UnityEngine;

namespace Logic.Items
{
    public interface IItem
    {
        void Take(Transform position);

        void Drop(Transform position);
    }
}