using System.Collections;
using Logic.Items;
using UnityEngine;

namespace Logic.Place
{
    public class TimberUnloadPlace : UnloadPlace
    {
        [SerializeField] private int _timberReward = 15;
        
        public override void Unload()
        {
            base.Unload();
            Debug.Log($"Timber unload place ready for processed wood");
        }
        
        // Проверка, является ли объект пиломатериалом
        protected override bool IsValidItemType(GameObject itemObject)
        {
            // Проверяем наличие компонента Timber на объекте
            return itemObject.GetComponent<Timber>() != null || itemObject.name.Contains("Timber");
        }
        
        // Возвращаем тип, который принимает эта точка разгрузки
        protected override ItemType GetAcceptedItemType()
        {
            return ItemType.Timber;
        }
        
        // Переопределяем MoveToUse для добавления специфичной логики для пиломатериалов
        protected override IEnumerator MoveToUse()
        {
            yield return StartCoroutine(base.MoveToUse());
            
            // Добавляем награду за разгрузку пиломатериалов
            // В реальной игре здесь может быть обновление счета, логика обработки материалов и т.д.
            Debug.Log($"Timber processing completed! Reward: {_timberReward} for processed wood");
        }
    }
}
