using UnityEngine;
using UnityEngine.Events;

namespace UI
{
    public class FillableBar3D : MonoBehaviour
    {
        [SerializeField] private Transform fillObject;
        [SerializeField] private float fullWidth = 1f;
        [SerializeField] private float fillSpeed = 5f;
        [SerializeField] private float minValue = 0f;
        [SerializeField] private float maxValue = 100f;
    
        public UnityEvent onFillComplete;

        private float fillAmount = 0f;
        private float _displayedAmount = 0f;

        public float FillAmount
        {
            get => fillAmount;
            set
            {
                fillAmount = Mathf.Clamp(value, minValue, maxValue);
                UpdateFill();
            }
        }

        private void Start()
        {
            UpdateFill();
        }

        private void Update()
        {
            float targetFill = Mathf.InverseLerp(minValue, maxValue, fillAmount);
            float currentFill = Mathf.InverseLerp(minValue, maxValue, _displayedAmount);
            
            if (!Mathf.Approximately(currentFill, targetFill))
            {
                _displayedAmount = Mathf.Lerp(_displayedAmount, fillAmount, fillSpeed * Time.deltaTime);
                UpdateFill();
                
                if (Mathf.Abs(_displayedAmount - fillAmount) < 0.01f)
                {
                    _displayedAmount = fillAmount;
                    UpdateFill();
                    
                    if (Mathf.Approximately(fillAmount, maxValue) && onFillComplete != null)
                    {
                        onFillComplete.Invoke();
                    }
                }
            }
        }

        private void UpdateFill()
        {
            float fillRatio = Mathf.InverseLerp(minValue, maxValue, _displayedAmount);
            float currentWidth = fullWidth * fillRatio;

            Vector3 scale = fillObject.localScale;
            scale.x = fillRatio;
            fillObject.localScale = scale;

            fillObject.localPosition = new Vector3(-(fullWidth - currentWidth) / 2f, 0f, 0f);
        }
        
        public void SetMinMaxValues(float min, float max)
        {
            minValue = min;
            maxValue = max;
            UpdateFill();
        }
    }
}