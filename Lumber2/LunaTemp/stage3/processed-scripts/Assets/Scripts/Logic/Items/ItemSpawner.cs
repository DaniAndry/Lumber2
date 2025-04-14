using System.Collections;
using Logic.Points;
using UnityEngine;

namespace Logic.Items
{
    public class ItemSpawner : MonoBehaviour
    {
        [SerializeField] private GameObject _itemPrefab;
        [SerializeField] private Transform _spawnPoint;
        [SerializeField] private ItemMovePoints _items;

        private ItemMover _itemMover;
        private IPoint _point;
        private float _spawnTime = 0.1f;
        private float _reloadTime = 5f;
        private Item _item;

        private void Start()
        {
            _itemMover = GetComponent<ItemMover>();
            StartCoroutine(SpawnItems());
        }

        private IEnumerator SpawnItems()
        {
            for (int i = 0; i < _items.GetCount(); i++)
            {
                if (_items.TryToMove() != null)
                {
                    yield return new WaitForSeconds(_spawnTime);

                    _point = _items.TryToMove();
                    var item = Instantiate(_itemPrefab, _spawnPoint.position, Quaternion.identity);
                    _point.TakePoint(item);
                    item.transform.parent = _point.Transform;
                    _itemMover.Move(item, _point.Transform);
                }
            }

            StartCoroutine(ReloadSpawn());
        }

        private IEnumerator ReloadSpawn()
        {
            yield return new WaitForSeconds(_reloadTime);
            StartCoroutine(SpawnItems());
        }
    }
}