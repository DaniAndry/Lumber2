using DG.Tweening;
using System.Collections;
using UnityEngine;

namespace Logic.Items
{
    public class ItemMover : MonoBehaviour
    {
        public void Move(GameObject moveObject, Transform targetTransform)
        {
            StartCoroutine(MoveAndFollow(moveObject, targetTransform));
        }
        
        private IEnumerator MoveAndFollow(GameObject moveObject, Transform targetTransform)
        {
            Tween moveTween = moveObject.transform.DOMove(targetTransform.position, 0.3f);
            
            yield return moveTween.WaitForCompletion();

            float followDuration = 0.5f;
            float elapsed = 0f;
            
            while (elapsed < followDuration)
            {
                if (moveObject == null || targetTransform == null)
                    yield break;
                
                moveObject.transform.position = targetTransform.position;
                moveObject.transform.rotation = new Quaternion(0,0,0,0);
                
                elapsed += Time.deltaTime;
                yield return null;
            }
            

            if (moveObject != null)
            {
                moveObject.transform.rotation = new Quaternion(0,0,0,0);
            }
        }
    }
}