using System.Collections;
using System.Globalization;
using UnityEngine;
using TMPro;

namespace Logic
{
    public class MoneyManager : MonoBehaviour
    {
        [Header("UI Настройки")]
        [SerializeField] private TextMeshProUGUI _balanceText;
        [SerializeField] private float _animationSpeed = 10f;
        
        [Header("Баланс")]
        [SerializeField] private float _startingBalance = 0f;
        
        private float _displayBalance = 0f;
        private float _currentBalance = 0f;

        private void Start()
        {
            _currentBalance = _startingBalance;
            _displayBalance = _startingBalance;
            UpdateBalanceText();
        }

        private float _lastDisplayedBalance = -1f;
        
        private void Update()
        {

            if (_lastDisplayedBalance != _currentBalance)
            {
                _displayBalance = _currentBalance;
                _lastDisplayedBalance = _currentBalance;
                UpdateBalanceText();
            }
        }

        public void AddMoney()
        {

            int convertedAmount = 5;
            _currentBalance += convertedAmount;
            _displayBalance = _currentBalance;
            UpdateBalanceText();

        }

        public void TrySpendMoney()
        {
            int convertedAmount = 5;
            if (_currentBalance >= convertedAmount)
            {
                _currentBalance -= convertedAmount;
                _displayBalance = _currentBalance;
                UpdateBalanceText();
            }
            
        }
        
        public float GetBalance()
        {
            return _currentBalance;
        }
        
        public void SetBalanceText(TextMeshProUGUI balanceText)
        {
            _balanceText = balanceText;
            UpdateBalanceText();
        }

        private void UpdateBalanceText()
        {
            if (_balanceText != null)
            {
                _balanceText.text = $"${Mathf.FloorToInt(_currentBalance)}";
                
                Canvas parentCanvas = _balanceText.GetComponentInParent<Canvas>();
                if (parentCanvas != null)
                {
                    parentCanvas.enabled = false;
                    parentCanvas.enabled = true;
                }
            }
        }
    }
}
