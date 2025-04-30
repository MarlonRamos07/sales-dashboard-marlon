import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
  appBackground: '#FFF',
  appColor: '#000',
  appDefaultStroke: '#E0E0E0',
  appLogo: 'dnc-logo-preto.svg',
  appSkeletonFrom: '#EEE',
  appSkeletonTo: '#CCC',
  buttons: {
    alert: '#E80000',
    alertColor: '#FFF',
    alertHover: '#D80000',
    disabled: '#CCC',
    disabledColor: '#666',
    primary: '#0C72F2',
    primaryColor: '#FFF',
    primaryHover: '#0061DE',
  },
  card: {
    alert: '#E80000',
    background: '#FFF',
    border: '#E0E0E0',
    success: '#008000',
    warning: '#F7A300',
  },
  textInput: {
    active: '#FFF',
    activeColor: '#000',
    borderColor: '#E0E0E0',
    disabled: '#EEE',
    disabledBorderColor: '#E0E0E0',
    disabledColor: '#666',
    placeholderColor: '#CCC',
  },
}

export const darkTheme: DefaultTheme = {
  // mesmas chaves do lightTheme, mas com cores invertidas/mais escuras
  appBackground: '#000',
  appColor: '#FFF',
  appDefaultStroke: '#333',
  appLogo: 'dnc-logo-branco.svg',
  appSkeletonFrom: '#333',
  appSkeletonTo: '#666',
  buttons: {
    alert: '#FF4C4C',
    alertColor: '#FFF',
    alertHover: '#CC0000',
    disabled: '#555',
    disabledColor: '#999',
    primary: '#3399FF',
    primaryColor: '#FFF',
    primaryHover: '#267ACC',
  },
  card: {
    alert: '#FF4C4C',
    background: '#111',
    border: '#333',
    success: '#00C851',
    warning: '#FFBB33',
  },
  textInput: {
    active: '#000',
    activeColor: '#FFF',
    borderColor: '#666',
    disabled: '#444',
    disabledBorderColor: '#333',
    disabledColor: '#999',
    placeholderColor: '#AAA',
  },
}

