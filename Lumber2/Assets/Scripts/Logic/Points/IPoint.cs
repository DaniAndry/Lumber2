using Logic.Items;
using UnityEngine;

namespace Logic.Points
{
    public interface IPoint
    {
        bool IsBusy { get; }
        Item Item { get; }
        Transform Transform { get; }
        void TakePoint(GameObject gameObject);
        void ReleasePoint();
    }
}