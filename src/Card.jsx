import { Button, Card, Image, Text } from "@chakra-ui/react"

const Card = () => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src="image/CB2.png"
        alt=""
      />
      <Card.Body gap="2">
        <Card.Title>Living room Sofa</Card.Title>
        <Card.Description>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces.
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          $450
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Buy now</Button>
        <Button variant="ghost">Add to cart</Button>
      </Card.Footer>
    </Card.Root>
  )
}
export default Card;