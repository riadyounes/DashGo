import { Box, Flex, Text, Avatar } from "@chakra-ui/react"

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Riad Younes</Text>
        <Text color="gray.300" fontSize="small">
          riad.younes@hotmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Riad Younes" />
    </Flex>
  );
}
