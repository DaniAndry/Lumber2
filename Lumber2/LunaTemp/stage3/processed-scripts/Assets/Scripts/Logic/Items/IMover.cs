using UnityEngine;

namespace Logic.Items
{
    internal interface IMover
    {
        void Move(GameObject moveObject, Transform targetTransform);
    }
}