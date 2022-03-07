// Tailwind does not support dynamic constructed class names
export default function twBgTypeColors(type: string) {
  if (type === 'all') {
    return 'bg-all'
  }
  if (type === 'normal') {
    return 'bg-normal'
  }
  if (type === 'fire') {
    return 'bg-fire'
  }
  if (type === 'water') {
    return 'bg-water'
  }
  if (type === 'electric') {
    return 'bg-electric'
  }
  if (type === 'grass') {
    return 'bg-grass'
  }
  if (type === 'ice') {
    return 'bg-ice'
  }
  if (type === 'fighting') {
    return 'bg-fighting'
  }
  if (type === 'poison') {
    return 'bg-poison'
  }
  if (type === 'ground') {
    return 'bg-ground'
  }
  if (type === 'flying') {
    return 'bg-flying'
  }
  if (type === 'psychic') {
    return 'bg-psychic'
  }
  if (type === 'bug') {
    return 'bg-bug'
  }
  if (type === 'rock') {
    return 'bg-rock'
  }
  if (type === 'ghost') {
    return 'bg-ghost'
  }
  if (type === 'dragon') {
    return 'bg-dragon'
  }
  if (type === 'steel') {
    return 'bg-steel'
  }
  if (type === 'fairy') {
    return 'bg-fairy'
  }
}
