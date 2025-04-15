using UnityEngine;
using UnityEngine.UI;
using TMPro;
using Logic;

namespace UI
{
    public class BalanceDisplay : MonoBehaviour
    {
        [SerializeField] private TextMeshProUGUI _balanceText;
        [SerializeField] private MoneyManager _moneyManager;
        
        private void Start()
        {

            if (_balanceText == null)
            {
                _balanceText = GetComponentInChildren<TextMeshProUGUI>();
                if (_balanceText == null)
                {

                    return;
                }
            }
            

            if (_moneyManager == null)
            {

                return;
            }
            

            _moneyManager.SetBalanceText(_balanceText);
        }
    }
}
