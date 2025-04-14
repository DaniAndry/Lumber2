using UnityEngine;

namespace Logic.Place
{
    public class MoneyLoadPlace : LoadPlace
    {
        [SerializeField] private int _moneyPerLoad = 10;
        
        public override void Load()
        {
            base.Load();
            // Специфичная логика для загрузки денежных предметов
            Debug.Log($"Money loading started: {_moneyPerLoad} coins");
        }
    }
}