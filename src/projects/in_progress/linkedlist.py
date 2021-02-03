# Iterative

class Node:
    def __init__(self, dataval=None):
        self.dataval = dataval
        self.nextval = None


class SLinkedList:
    def __init__(self):
        self.headval = None

    def listprint(self):
        printval = self.headval
        while printval is not None:
            print(printval.dataval)
            printval = printval.nextval


list1 = SLinkedList()
list1.headval = Node("Mon")
e2 = Node("Tue")
e3 = Node("Wed")
# Link first Node to second node
list1.headval.nextval = e2

# Link second Node to third node
e2.nextval = e3

# print list
list.listprint()

def reverse_list():
    preNode = null
    currNode = head
    nextNode = null
    while(curr != null):
        nextNode = currNode.next
        curr.next = preNode
        preNode = currNode
        currNode = nextNode
    return preNode
