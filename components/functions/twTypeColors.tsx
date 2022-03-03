// Tailwind does not support dynamic constructed class names
export default function twTypeColors(type: string) {
  if (type === 'normal') {
    return 'border-normal'
  }
  if (type === 'fire') {
    return 'border-fire'
  }
  if (type === 'water') {
    return 'border-water'
  }
  if (type === 'electric') {
    return 'border-electric'
  }
  if (type === 'grass') {
    return 'border-grass'
  }
  if (type === 'ice') {
    return 'border-ice'
  }
  if (type === 'fighting') {
    return 'border-fighting'
  }
  if (type === 'poison') {
    return 'border-poison'
  }
  if (type === 'ground') {
    return 'border-ground'
  }
  if (type === 'flying') {
    return 'border-flying'
  }
  if (type === 'psychic') {
    return 'border-psychic'
  }
  if (type === 'bug') {
    return 'border-bug'
  }
  if (type === 'rock') {
    return 'border-rock'
  }
  if (type === 'ghost') {
    return 'border-ghost'
  }
  if (type === 'dragon') {
    return 'border-dragon'
  }
  if (type === 'dark') {
    return 'border-dark'
  }
  if (type === 'steel') {
    return 'border-steel'
  }
  if (type === 'fairy') {
    return 'border-fairy'
  }
}
