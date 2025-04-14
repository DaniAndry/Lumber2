using UnityEngine;

namespace Logic.Place
{
    public class MoneyLoadPlace : LoadPlace
    {
        [SerializeField] private int _moneyPerLoad = 10;
        
        public override void Load()
        {
            Debug.Log($"Money loading started: {_moneyPerLoad} coins");
            base.Load();
        }
    }
}