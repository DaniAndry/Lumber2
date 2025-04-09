using System.Collections.Generic;
using CodeBase.Logic.Points;
using UnityEngine;

namespace Logic.Items
{
    public class ItemMover : MonoBehaviour
    {
        [SerializeField] private List<MoneyMovePoint> moneyMovePoints;
        [SerializeField] private List<ItemMover> itemMovers;

        private void OnTriggerEnter(Collider other)
        {
            if (other.TryGetComponent<IPoint>(out IPoint movePoint))
            {
            
            }
        }
    }
}