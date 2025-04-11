using DG.Tweening;
using UnityEngine;

namespace Logic.Items
{
    public class ItemMover : MonoBehaviour
    {
        public void Move(GameObject moveObject, Transform targetTransform)
        {
            moveObject.transform.DOMove(targetTransform.position, 0.5f);
        }
    }
}