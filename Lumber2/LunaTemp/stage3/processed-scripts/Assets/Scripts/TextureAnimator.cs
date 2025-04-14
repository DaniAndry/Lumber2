using UnityEngine;

public class TextureAnimator : MonoBehaviour
{
    public Material targetMaterial;
    public string texturePropertyName = "_MainTex";
    public Vector2 scrollSpeed = new Vector2(0.1f, 0.1f);

    private Vector2 _offset;

    void Update()
    {
        if (targetMaterial != null)
        {
            _offset += scrollSpeed * Time.deltaTime;
            _offset.x = Mathf.Repeat(_offset.x, 1f);
            _offset.y = Mathf.Repeat(_offset.y, 1f);
            
            targetMaterial.SetTextureOffset(texturePropertyName, _offset);
        }
    }
}