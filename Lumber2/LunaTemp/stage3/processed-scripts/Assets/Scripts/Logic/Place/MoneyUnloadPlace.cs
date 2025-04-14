using UnityEngine;

namespace Logic.Place
{
    public class MoneyUnloadPlace : UnloadPlace
    {
        [SerializeField] private int _moneyReward = 5;
        
        public override void Unload()
        {
            base.Unload();
            // Специфичная логика для разгрузки денежных предметов
            // Например, обновление счета игрока
            Debug.Log($"Money unloaded! Added: {_moneyReward} coins");
        }
    }
}