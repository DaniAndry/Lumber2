using Logic.Items;
using UnityEngine;

namespace Logic.Place
{
    public class TreeUnloadPlace : UnloadPlace
    {
        [SerializeField] private int _rewardAmount = 10;
        [SerializeField] private ItemSpawner _itemSpawner;
        public override void Unload()
        {
            base.Unload();
            Debug.Log($"Tree unloaded! Reward: {_rewardAmount}");
     
            
        }
    }
}