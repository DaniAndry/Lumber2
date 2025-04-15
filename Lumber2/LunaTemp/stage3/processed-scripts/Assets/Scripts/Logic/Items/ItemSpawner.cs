using System.Collections;
using Logic.Place;
using Logic.Points;
using UnityEngine;

namespace Logic.Items
{
    public class ItemSpawner : MonoBehaviour
    {
        [SerializeField] private GameObject _itemPrefab;
        [SerializeField] private Transform _spawnPoint;
        [SerializeField] private MovePoints _items;

        private IMover _itemMover;
        private IPoint _point;
        private float _spawnTime = 0.1f;
        private float _reloadTime = 5f;
        private Item _item;
        private Coroutine _spawnCoroutine;

        private void Start()
        {
            _itemMover = GetComponent<IMover>();
            _spawnCoroutine = StartCoroutine(SpawnItems());
        }

        private void OnDestroy()
        {
            if (_spawnCoroutine != null)
            {
                StopCoroutine(_spawnCoroutine);
            }
        }

        protected IEnumerator SpawnItems()
        {
            if (_items == null)
            {
                yield break;
            }
            
            int count = 0;
            try {
                count = _items.GetCount();
            }
            catch {
                yield break;
            }
            
            for (int i = 0; i < count; i++)
            {
                IPoint availablePoint = null;
                try {
                    availablePoint = _items.TryToMove();
                }
                catch {
                    continue;
                }
                
                if (availablePoint != null)
                {
                    yield return new WaitForSeconds(_spawnTime);

                    try {
                        _point = availablePoint;
                        var item = Instantiate(_itemPrefab, _spawnPoint.position, _spawnPoint.rotation);
                        _point.TakePoint(item);
                        item.transform.parent = _point.Transform;
                        _itemMover.Move(item, _point.Transform);
                    }
                    catch {
                    }
                }
            }

            yield return new WaitForSeconds(_reloadTime);
            _spawnCoroutine = StartCoroutine(SpawnItems());
        }
    }

    public class TimberSpawner : ItemSpawner
    {
        [SerializeField] private UnloadPlace _unloadPlace;
    }
}
