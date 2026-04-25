export interface cloneSceneProps {
  child: any;
  childName: string;
  childMaterialName: string;
  newColor: string;
}

export const handleCloneScene = ({
  child,
  childName,
  childMaterialName,
  newColor,
}: cloneSceneProps) => {
  if (
    child.name.includes(`${childName}`) &&
    child.material.name.includes(`${childMaterialName}`)
  ) {
    child.material = child.material.clone();
    child.material.color.set(newColor);
  }
};
