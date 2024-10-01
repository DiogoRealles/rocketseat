import { ContainerInput } from './styles'

const Index = ({icon: Icon, ...rest}) => {
  return (
      <ContainerInput>
        {Icon && <Icon size={20} />}

        <input {...rest} />
      </ContainerInput>
  )
}

export default Index
