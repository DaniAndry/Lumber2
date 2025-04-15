using System.Collections;
using Logic.Items;
using UnityEngine;
using UI;

namespace Logic.Place
{
    public class MoneyUnloadPlace : UnloadPlace
    {
        [SerializeField] private int _targetBalance = 100;
        [SerializeField] private int _currentBalance = 0;
        [SerializeField] private UI.FillableBar3D _progressBar;
        [SerializeField] private GameObject _completedBuilding;
        [SerializeField] private GameObject _uncompletedBuilding;

        private bool _isCompleted = false;
        [SerializeField] private MoneyManager _moneyManager; 

        private void Start()
        {
            UpdateBuildingState();

            if (_progressBar != null)
            {
                _progressBar.SetMinMaxValues(0, _targetBalance);
                _progressBar.FillAmount = _currentBalance;
            }
        }

        public override void Unload()
        {
            if (_isCompleted)
            {
                return;
            }

            _moneyManager.TrySpendMoney();
            base.Unload();
     
        }

        protected override bool IsValidItemType(GameObject itemObject)
        {
            return itemObject.GetComponent<Money>() != null || itemObject.name.Contains("Money");
        }

        protected override ItemType GetAcceptedItemType()
        {
            return ItemType.Money;
        }

        private void AddToConstructionBalance(int amount)
        {
            if (_isCompleted) return;

            _currentBalance += amount;

            if (_currentBalance >= _targetBalance)
            {
                _currentBalance = _targetBalance;
                CompleteBuildingConstruction();
            }

            if (_progressBar != null)
            {
                _progressBar.FillAmount = _currentBalance;

                if (_progressBar.gameObject.activeInHierarchy)
                {
                    Canvas canvas = _progressBar.GetComponentInParent<Canvas>();
                    if (canvas != null)
                    {
                        canvas.enabled = false;
                        canvas.enabled = true;
                    }
                }
            }
        }

        private void CompleteBuildingConstruction()
        {
            _isCompleted = true;
            UpdateBuildingState();
            gameObject.SetActive(false);
        }

        private void UpdateBuildingState()
        {
            if (_completedBuilding != null)
            {
                _completedBuilding.SetActive(_isCompleted);
            }

            if (_uncompletedBuilding != null)
            {
                _uncompletedBuilding.SetActive(!_isCompleted);
            }
        }

        protected override IEnumerator UnloadItems()
        {
            int unloadedCount = 0;

            for (int i = 0; i < _forkliftPoints.GetCount(); i++)
            {
                yield return new WaitForSeconds(_moveTime);

                if (_forkliftPoints == null)
                {
                    _isUnloading = false;
                    yield break;
                }

                if (_forkliftPoints.ReplaceItemOnPoint() != null)
                {
                    _point = _forkliftPoints.ReplaceItemOnPoint();
                    GameObject movingObject = _point.Item.GameObject;

                    if (IsValidItemType(movingObject))
                    {
                        _point.ReleasePoint();
                        movingObject.transform.parent = _targetUsePoint;

                        _itemMover.Move(movingObject, _targetUsePoint);
                        unloadedCount++;

                        AddToConstructionBalance(5);
                    }
                }
            }

            _isUnloading = false;
        }
    }
}