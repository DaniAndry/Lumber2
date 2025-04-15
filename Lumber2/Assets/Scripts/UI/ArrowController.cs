using UnityEngine;

namespace UI
{
    public class ArrowController : MonoBehaviour
    {
        private const string StartState = "StartAnimation";
        private const string TreeState = "TreeAnimation";
        private const string StopState = "StopAnimation";
        private const string LoadState = "LoadAnimation";
        private const string UnloadState = "UnloadAnimation";
        private const string LoadMoneyState = "LoadMoneyAnimation";
        private const string UnloadMoneyState = "UnloadMoneyAnimation";

        private Animator _animator;

        private void Awake()
        {
            _animator = GetComponent<Animator>();
        }

        public void PlayStartAnimation()
        {
            _animator.Play(StartState);
        }

        public void PlayTreeAnimation()
        {
            _animator.Play(TreeState);
        }

        public void StopAnimation()
        {
            _animator.Play(StopState);
        }

        public void PlayLoadMoneyAnimation()
        {
            _animator.Play(LoadMoneyState);
        }

        public void PlayUnloadMoneyAnimation()
        {
            _animator.Play(UnloadMoneyState);
        }

        public void PlayLoadAnimation()
        {
            _animator.Play(LoadState);
        }

        public void PlayUnloadAnimation()
        {
            _animator.Play(UnloadState);
        }
    }
}