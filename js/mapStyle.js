/**
 * @author ray zhang
 * @description 地图层级样式
 * @param zoom 对应层级
 */
function getMapStyle(zoom) {
  if (zoom > 2 && zoom < 6) {
    return styleList.s3_4_5
  }
  if (zoom === 6) {
    return styleList.s6
  }
  if (zoom === 7 || zoom === 8) {
    return styleList.s7_8
  }
  if (zoom === 9 || zoom === 10) {
    return styleList.s9_10
  }
  if (zoom === 11 || zoom === 12) {
    return styleList.s11_12
  }
  if (zoom === 13) {
    return styleList.s13
  }
  if (zoom === 14) {
    return styleList.s14
  }
  if (zoom === 15 || zoom === 16) {
    return styleList.s15_16
  }
  if (zoom === 17) {
    return styleList.s17
  }
  if (zoom === 18) {
    return styleList.s18
  }
}

const styleList = {
  s3_4_5: [
    {
      'featureType': 'land',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#001032'
      }
    },
    {
      'featureType': 'water',
      'elementType': 'all',
      'stylers': {
        'color': '#001a3d'
      }
    },
    {
      'featureType': 'boundary',
      'elementType': 'geometry',
      'stylers': {
        'color': '#073763',
        'weight': '0.8'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#234755',
        'weight': '0.1'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.icon',
      'stylers': {
        'color': '#6fa8dc',
        'weight': '0.1',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#001a3d',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#a2c4c9',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'green',
      'elementType': 'all',
      'stylers': {
        'color': '#073763'
      }
    },
    {
      'featureType': 'manmade',
      'elementType': 'all',
      'stylers': {
        'color': '#073763'
      }
    },
    {
      'featureType': 'building',
      'elementType': 'all',
      'stylers': {
        'color': '#0c343d'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'all',
      'stylers': {
        'color': '#073763',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'local',
      'elementType': 'geometry',
      'stylers': {
        'color': '#073763',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'geometry',
      'stylers': {
        'color': '#062e52'
      }
    },
    {
      'featureType': 'poi',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'arterial',
      'elementType': 'geometry',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'railway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'local',
      'elementType': 'labels',
      'stylers': {
        'color': '#062e52',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.icon',
      'stylers': {
        'color': '#062e52',
        'weight': '7.4',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'arterial',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#3d85c6',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    }
  ],
  s6: [
    {
      'featureType': 'land',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#001032'
      }
    },
    {
      'featureType': 'water',
      'elementType': 'all',
      'stylers': {
        'color': '#001a3d'
      }
    },
    {
      'featureType': 'boundary',
      'elementType': 'geometry',
      'stylers': {
        'color': '#6a94bb',
        'weight': '1.1'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#234755',
        'weight': '0.1'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.icon',
      'stylers': {
        'color': '#0b5394',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#001a3d',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#266cac',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'green',
      'elementType': 'all',
      'stylers': {
        'color': '#073763'
      }
    },
    {
      'featureType': 'manmade',
      'elementType': 'all',
      'stylers': {
        'color': '#073763'
      }
    },
    {
      'featureType': 'building',
      'elementType': 'all',
      'stylers': {
        'color': '#0c343d'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'all',
      'stylers': {
        'color': '#073763',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'local',
      'elementType': 'geometry',
      'stylers': {
        'color': '#073763',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'geometry',
      'stylers': {
        'color': '#062e52'
      }
    },
    {
      'featureType': 'poi',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'arterial',
      'elementType': 'geometry',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'railway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'local',
      'elementType': 'labels',
      'stylers': {
        'color': '#062e52',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.icon',
      'stylers': {
        'color': '#062e52',
        'weight': '7.4',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'arterial',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#3d85c6',
        'visibility': 'off'
      }
    }
  ],
  s7_8: [
    {
      'featureType': 'land',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#001032'
      }
    },
    {
      'featureType': 'water',
      'elementType': 'all',
      'stylers': {
        'color': '#001a3d'
      }
    },
    {
      'featureType': 'boundary',
      'elementType': 'geometry',
      'stylers': {
        'color': '#8aadce',
        'weight': '1.5'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#234755',
        'weight': '0.1'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.icon',
      'stylers': {
        'color': '#0b5394',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#001a3d',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#3783c8',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'green',
      'elementType': 'all',
      'stylers': {
        'color': '#073763'
      }
    },
    {
      'featureType': 'manmade',
      'elementType': 'all',
      'stylers': {
        'color': '#073763'
      }
    },
    {
      'featureType': 'building',
      'elementType': 'all',
      'stylers': {
        'color': '#0c343d'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'all',
      'stylers': {
        'color': '#073763',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'local',
      'elementType': 'geometry',
      'stylers': {
        'color': '#073763',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'geometry',
      'stylers': {
        'color': '#062e52'
      }
    },
    {
      'featureType': 'poi',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'arterial',
      'elementType': 'geometry',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'railway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'local',
      'elementType': 'labels',
      'stylers': {
        'color': '#062e52',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.icon',
      'stylers': {
        'color': '#062e52',
        'weight': '7.4',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'arterial',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#3d85c6',
        'visibility': 'off'
      }
    }
  ],
  s9_10: [
    {
      'featureType': 'land',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#001032'
      }
    },
    {
      'featureType': 'water',
      'elementType': 'all',
      'stylers': {
        'color': '#001a3d'
      }
    },
    {
      'featureType': 'boundary',
      'elementType': 'geometry',
      'stylers': {
        'color': '#a0c3e3',
        'weight': '1.5'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#234755',
        'weight': '0.1'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.icon',
      'stylers': {
        'color': '#0b5394',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#001a3d',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#3d7fbb',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'green',
      'elementType': 'all',
      'stylers': {
        'color': '#073763'
      }
    },
    {
      'featureType': 'manmade',
      'elementType': 'all',
      'stylers': {
        'color': '#073763'
      }
    },
    {
      'featureType': 'building',
      'elementType': 'all',
      'stylers': {
        'color': '#0c343d'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'all',
      'stylers': {
        'color': '#073763',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'local',
      'elementType': 'geometry',
      'stylers': {
        'color': '#073763',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'geometry',
      'stylers': {
        'color': '#062e52'
      }
    },
    {
      'featureType': 'poi',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'arterial',
      'elementType': 'geometry',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'railway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'local',
      'elementType': 'labels',
      'stylers': {
        'color': '#062e52',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.icon',
      'stylers': {
        'color': '#062e52',
        'weight': '7.4',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'arterial',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#3d85c6',
        'visibility': 'off'
      }
    }
  ],
  s11_12: [
    {
      'featureType': 'land',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#001032'
      }
    },
    {
      'featureType': 'water',
      'elementType': 'all',
      'stylers': {
        'color': '#0c3061'
      }
    },
    {
      'featureType': 'boundary',
      'elementType': 'geometry',
      'stylers': {
        'color': '#a0c3e3',
        'weight': '1.5'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#234755',
        'weight': '0.1'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.icon',
      'stylers': {
        'color': '#0b5394',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#001a3d',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#4b90d0',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'green',
      'elementType': 'all',
      'stylers': {
        'color': '#073763'
      }
    },
    {
      'featureType': 'manmade',
      'elementType': 'all',
      'stylers': {
        'color': '#073763'
      }
    },
    {
      'featureType': 'building',
      'elementType': 'all',
      'stylers': {
        'color': '#0c343d'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'all',
      'stylers': {
        'color': '#073763',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'local',
      'elementType': 'geometry',
      'stylers': {
        'color': '#073763',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'geometry',
      'stylers': {
        'color': '#062e52'
      }
    },
    {
      'featureType': 'poi',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'arterial',
      'elementType': 'geometry',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'railway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'local',
      'elementType': 'labels',
      'stylers': {
        'color': '#062e52',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.icon',
      'stylers': {
        'color': '#062e52',
        'weight': '7.4',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'arterial',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#3b80bf',
        'visibility': 'off'
      }
    }
  ],
  s13: [
    {
      'featureType': 'land',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#001032'
      }
    },
    {
      'featureType': 'water',
      'elementType': 'all',
      'stylers': {
        'color': '#123c76'
      }
    },
    {
      'featureType': 'boundary',
      'elementType': 'geometry',
      'stylers': {
        'color': '#a0c3e3',
        'weight': '1.5'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#234755',
        'weight': '0.1'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.icon',
      'stylers': {
        'color': '#0b5394',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#001a3d',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#64a6e3',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'green',
      'elementType': 'all',
      'stylers': {
        'color': '#073763'
      }
    },
    {
      'featureType': 'manmade',
      'elementType': 'all',
      'stylers': {
        'color': '#073763'
      }
    },
    {
      'featureType': 'building',
      'elementType': 'all',
      'stylers': {
        'color': '#0c343d'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'all',
      'stylers': {
        'color': '#073763',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'local',
      'elementType': 'geometry',
      'stylers': {
        'color': '#073763',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'geometry',
      'stylers': {
        'color': '#062e52'
      }
    },
    {
      'featureType': 'poi',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'arterial',
      'elementType': 'geometry',
      'stylers': {
        'color': '#143a5c',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'railway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'local',
      'elementType': 'labels',
      'stylers': {
        'color': '#062e52',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.icon',
      'stylers': {
        'color': '#062e52',
        'weight': '7.4',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'arterial',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#3d85c6',
        'visibility': 'off'
      }
    }
  ],
  s14: [
    {
      'featureType': 'land',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#001032'
      }
    },
    {
      'featureType': 'water',
      'elementType': 'all',
      'stylers': {
        'color': '#123c76'
      }
    },
    {
      'featureType': 'boundary',
      'elementType': 'geometry',
      'stylers': {
        'color': '#a0c3e3',
        'weight': '1.5'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#234755',
        'weight': '0.1'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.icon',
      'stylers': {
        'color': '#0b5394',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#001a3d',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#64a6e3',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'green',
      'elementType': 'all',
      'stylers': {
        'color': '#073763'
      }
    },
    {
      'featureType': 'manmade',
      'elementType': 'all',
      'stylers': {
        'color': '#073763'
      }
    },
    {
      'featureType': 'building',
      'elementType': 'all',
      'stylers': {
        'color': '#0c343d'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'all',
      'stylers': {
        'color': '#073763',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'local',
      'elementType': 'geometry',
      'stylers': {
        'color': '#073763',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'geometry',
      'stylers': {
        'color': '#062e52'
      }
    },
    {
      'featureType': 'poi',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'arterial',
      'elementType': 'geometry',
      'stylers': {
        'color': '#20496e',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'railway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'local',
      'elementType': 'labels',
      'stylers': {
        'color': '#062e52',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.icon',
      'stylers': {
        'color': '#062e52',
        'weight': '7.4',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'arterial',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#3d85c6',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'arterial',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#062e52',
        'visibility': 'on'
      }
    }
  ],
  s15_16: [
    {
      'featureType': 'land',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#001032'
      }
    },
    {
      'featureType': 'water',
      'elementType': 'all',
      'stylers': {
        'color': '#123c76'
      }
    },
    {
      'featureType': 'boundary',
      'elementType': 'geometry',
      'stylers': {
        'color': '#a0c3e3',
        'weight': '1.5'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#234755',
        'weight': '0.1'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.icon',
      'stylers': {
        'color': '#0b5394',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#001a3d',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#64a6e3',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'green',
      'elementType': 'all',
      'stylers': {
        'color': '#001034'
      }
    },
    {
      'featureType': 'manmade',
      'elementType': 'all',
      'stylers': {
        'color': '#001034'
      }
    },
    {
      'featureType': 'building',
      'elementType': 'all',
      'stylers': {
        'color': '#071940',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'all',
      'stylers': {
        'color': '#073763',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'local',
      'elementType': 'geometry',
      'stylers': {
        'color': '#194369',
        'weight': '0.1',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'geometry',
      'stylers': {
        'color': '#062e52'
      }
    },
    {
      'featureType': 'poi',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'arterial',
      'elementType': 'geometry',
      'stylers': {
        'color': '#194369',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'railway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'local',
      'elementType': 'labels',
      'stylers': {
        'color': '#062e52',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.icon',
      'stylers': {
        'color': '#062e52',
        'weight': '7.4',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'arterial',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#6fa8dc',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'arterial',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#072f54'
      }
    }
  ],
  s17: [
    {
      'featureType': 'land',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#001032'
      }
    },
    {
      'featureType': 'water',
      'elementType': 'all',
      'stylers': {
        'color': '#123c76'
      }
    },
    {
      'featureType': 'boundary',
      'elementType': 'geometry',
      'stylers': {
        'color': '#a0c3e3',
        'weight': '1.5'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#234755',
        'weight': '0.1'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.icon',
      'stylers': {
        'color': '#0b5394',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#001a3d',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#64a6e3',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'green',
      'elementType': 'all',
      'stylers': {
        'color': '#001034'
      }
    },
    {
      'featureType': 'manmade',
      'elementType': 'all',
      'stylers': {
        'color': '#001034'
      }
    },
    {
      'featureType': 'building',
      'elementType': 'all',
      'stylers': {
        'color': '#071940',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'all',
      'stylers': {
        'color': '#073763',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'local',
      'elementType': 'geometry',
      'stylers': {
        'color': '#194369',
        'weight': '0.1',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'geometry',
      'stylers': {
        'color': '#062e52'
      }
    },
    {
      'featureType': 'poi',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'arterial',
      'elementType': 'geometry',
      'stylers': {
        'color': '#215481',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'railway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'local',
      'elementType': 'labels',
      'stylers': {
        'color': '#062e52',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.icon',
      'stylers': {
        'color': '#062e52',
        'weight': '7.4',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'arterial',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#97c3ec',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'arterial',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#072f54'
      }
    }
  ],
  s18: [
    {
      'featureType': 'land',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#001032'
      }
    },
    {
      'featureType': 'water',
      'elementType': 'all',
      'stylers': {
        'color': '#123c76'
      }
    },
    {
      'featureType': 'boundary',
      'elementType': 'geometry',
      'stylers': {
        'color': '#a0c3e3',
        'weight': '1.5'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'geometry.fill',
      'stylers': {
        'color': '#234755',
        'weight': '0.1'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.icon',
      'stylers': {
        'color': '#0b5394',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#001a3d',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#64a6e3',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'green',
      'elementType': 'all',
      'stylers': {
        'color': '#07205a'
      }
    },
    {
      'featureType': 'manmade',
      'elementType': 'all',
      'stylers': {
        'color': '#001034'
      }
    },
    {
      'featureType': 'building',
      'elementType': 'all',
      'stylers': {
        'color': '#071940',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'all',
      'stylers': {
        'color': '#073763',
        'weight': '0.1',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'local',
      'elementType': 'geometry',
      'stylers': {
        'color': '#194369',
        'weight': '0.1',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'geometry',
      'stylers': {
        'color': '#062e52'
      }
    },
    {
      'featureType': 'poi',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#2c70ac',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'arterial',
      'elementType': 'geometry',
      'stylers': {
        'color': '#215481',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'highway',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'labels',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'railway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'subway',
      'elementType': 'all',
      'stylers': {
        'visibility': 'off'
      }
    },
    {
      'featureType': 'local',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#001a3d',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'label',
      'elementType': 'labels.icon',
      'stylers': {
        'color': '#062e52',
        'weight': '7.4',
        'visibility': 'off'
      }
    },
    {
      'featureType': 'arterial',
      'elementType': 'labels.text.fill',
      'stylers': {
        'color': '#97c3ec',
        'visibility': 'on'
      }
    },
    {
      'featureType': 'arterial',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#072f54'
      }
    },
    {
      'featureType': 'poi',
      'elementType': 'labels.text.stroke',
      'stylers': {
        'color': '#001a3d'
      }
    },
    {
      'featureType': 'poi',
      'elementType': 'labels.icon',
      'stylers': {
        'visibility': 'off'
      }
    }
  ]
};
//export default getMapStyle



// WEBPACK FOOTER //
// ./src/config/map-style.js