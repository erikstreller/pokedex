// Tailwind does not support dynamic constructed class names
export default function twBgHoverTypeColors(type: string) {
  if (type === 'all') {
    return 'hover:bg-all'
  }
  if (type === 'normal') {
    return 'hover:bg-normal'
  }
  if (type === 'fire') {
    return 'hover:bg-fire'
  }
  if (type === 'water') {
    return 'hover:bg-water'
  }
  if (type === 'electric') {
    return 'hover:bg-electric'
  }
  if (type === 'grass') {
    return 'hover:bg-grass'
  }
  if (type === 'ice') {
    return 'hover:bg-ice'
  }
  if (type === 'fighting') {
    return 'hover:bg-fighting'
  }
  if (type === 'poison') {
    return 'hover:bg-poison'
  }
  if (type === 'ground') {
    return 'hover:bg-ground'
  }
  if (type === 'flying') {
    return 'hover:bg-flying'
  }
  if (type === 'psychic') {
    return 'hover:bg-psychic'
  }
  if (type === 'bug') {
    return 'hover:bg-bug'
  }
  if (type === 'rock') {
    return 'hover:bg-rock'
  }
  if (type === 'ghost') {
    return 'hover:bg-ghost'
  }
  if (type === 'dragon') {
    return 'hover:bg-dragon'
  }
  if (type === 'steel') {
    return 'hover:bg-steel'
  }
  if (type === 'fairy') {
    return 'hover:bg-fairy'
  }
}
