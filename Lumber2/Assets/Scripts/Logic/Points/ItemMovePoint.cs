namespace CodeBase.Logic.Points
{
    public class ItemMovePoint : IPoint
    {
        public bool IsBusy { get; private set; }

        public void TakePoint()
        {
            IsBusy = true;
        }

        public void ReleasePoint()
        {
            IsBusy = false;
        }
    }
}