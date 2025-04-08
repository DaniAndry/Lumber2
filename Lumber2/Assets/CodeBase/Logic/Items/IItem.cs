using UnityEngine;

public interface IItem
{
    void Take(Transform position);

    void Drop(Transform position);
}