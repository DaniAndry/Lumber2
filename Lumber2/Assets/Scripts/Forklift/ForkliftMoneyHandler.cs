using UnityEngine;
using Logic;
using Logic.Items;
using Logic.Points;

namespace Forklift
{
    public class ForkliftMoneyHandler : MonoBehaviour
    {
        [SerializeField] private MoneyManager _moneyManager;

        

        public void HandleTriggerEnter()
        {
            _moneyManager.AddMoney();
        }
    }
}