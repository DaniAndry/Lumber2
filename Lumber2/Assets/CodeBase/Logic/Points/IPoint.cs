using UnityEngine;
using UnityEngine.Events;

namespace CodeBase.Logic.Points
{
    public interface IPoint
    {
        void MoveTo(Vector3 position);
    }

    public class ItemMovePoint : IPoint
    {
        public UnityAction<bool> OnFinish;
        
        public void MoveTo(Vector3 position)
        {
            
        }
    }
}