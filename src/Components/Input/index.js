import React from 'react'
import * as S from './styles'

export default function Input() {
  return (
    <S.Wrapper>
      <S.InputTop>
        <S.Input>
          <input type="text" />
        </S.Input>
        <S.Input>
          <input type="text" />
        </S.Input>
      </S.InputTop>
      <S.InputBot>
      <S.Input className='input-bot'>
        <input type="text" />
      </S.Input>
      </S.InputBot>
    </S.Wrapper>
  )
}