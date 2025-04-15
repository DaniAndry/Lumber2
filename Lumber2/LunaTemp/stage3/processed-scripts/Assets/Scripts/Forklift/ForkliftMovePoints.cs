using Logic.Items;
using Logic.Points;
using UnityEngine;

namespace Forklift
{
    public class ForkliftMovePoints : MovePoints
    {
        public ItemMover Mover;
        private ForkliftMoneyHandler _handler;

        private void Awake()
        {
            _handler = GetComponent<ForkliftMoneyHandler>();
        }
    }
}