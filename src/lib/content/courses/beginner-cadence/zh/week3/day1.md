---
title: 资源
day: 1
language: zh
excerpt: 资源
---

# 第三章 第一天 - 资源

我们今天来学习 Cadence 中最最重要的话题：Resource 资源。没开玩笑，这是你从这里学到的最重要的内容！我们开始吧！

## 视频

1. 你可以看视频的 00:00 - 08:00 部分 (其余内容我们以后再讨论): https://www.youtube.com/watch?v=SGa2mnDFafc

## 资源

<img src="/courses/beginner-cadence/resources.jpeg" alt="drawing" width="500" />

resource 或许是 Cadence 中最关键的一个组件，也是为什么 Cadence 是如此的特殊。顺便说一下，可以把 **一个 resource 看作是一个更安全的 struct**。这个是简单说法。但更重要的是，因为 resource 的安全性，resource 会有很多很有意思的用途，我们稍后会讲到。

读代码总是有帮助的，我们先来看一看这个：

```cadence
pub resource Greeting {
    pub let message: String
    init() {
        self.message = "Hello, Mars!"
    }
}
```

看起来是不是很像一个 Struct？ 从代码的角度，他们看上去确实很类似。这里，`Greeting` resource 是一个包含了一条 `String` 类型的信息的容器。但这背后还有着很多很多的不同。

### Resources vs. Structs

在 Cadence 中，structs 仅仅是数据的容器。你可以复制他们，覆写 overwrite 他们，在任何时间创建他们。所有的这些在 resource 上都不适用。下面这些是定义 resource 的几个重要的点：

1. 他们不能被复制。
2. 他们不能被丢失（或者复写）
3. 他们不能在任何时候都被创建
4. 你必须 _非常非常_ 明确的表明你如何处理这个 resource (比如，移动他们)
5. Resources 更难操作。

让我们看下面的这些代码来学习 resource：

```cadence
pub contract Test {

    pub resource Greeting {
        pub let message: String
        init() {
            self.message = "Hello, Mars!"
        }
    }

    pub fun createGreeting(): @Greeting {
        let myGreeting <- create Greeting()
        return <- myGreeting
    }
}
```

这里发生了很多很重要的事情，我们挨个来看：

1. 我们声明了一个 resource 类型的 `Greeting`， 包含一个 `message` 域. 这个你已经知道了
2. 我们定义了一个 `createGreeting` 函数来返回一个 `Greeting` resource. 注意在 Cadence 中，resource 用 `@` 符来表示"这是一个 resource"。
3. 我们用 `create` 关键字创建了一个新的 `Greeting`，并用 `<-` "移动" 操作符赋值给 `myGreeting`. 在 Cadence 中, 你不能用 `=` 来把 resource 放到某个地方. 你必须用 `<-` "移动操作符" 显式的 "移动" resource.
4. 通过移动 resource，我们把新创建的 `Greeting` 返回.

好的，这很酷。但如果我们 _想_ 销毁一个 resource 呢？好的，这个做起来很简单：

```cadence
pub contract Test {

    pub resource Greeting {
        pub let message: String
        init() {
            self.message = "Hello, Mars!"
        }
    }

    pub fun makeAndDestroy() {
        let myGreeting <- create Greeting()
        destroy myGreeting
        // 请注意：这是唯一一个你不需要用到`<-`操作符来改变resource所属地的地方。
    }
}
```

你已经能发现 resources 和 struct 有很大的不同。我们需要更清晰的表述我们想要如何操控 resource。让我们来看一下 resource 有哪些事情我们不能做：

```cadence
pub contract Test {

    pub resource Greeting {
        pub let message: String
        init() {
            self.message = "Hello, Mars!"
        }
    }

    pub fun createGreeting(): @Greeting {
        let myGreeting <- create Greeting()

        /*
            myGreeting <- create Greeting()

            你不能做上述的操作。这将”覆写overwrite“ myGreeting 变量，
            并立刻丢失之前已经存在这里的resource
        */

        /*
            let copiedMyGreeting = myGreeting

            你不能进行上述的操作。这是在尝试”复制“ myGreeting resource，但这是不允许的。
            resource永远不能被复制。如果你想把 myGreeting ”移动“ 到 copiedMyGreeting：
            你可以这样做：

            let copiedMyGreeting <- myGreeting

            这样之后，myGreeting里就什么都不存储了，因此你也不能再使用它了
        */

        /*
            return myGreeting

            你不能做上述操作。你必须用 <- 操作符显式的”移动“resource
        */
        return <- myGreeting
    }
}
```

不过这个为什么会有很用呢？ 它不是非常繁琐吗？不是的，这其实非常有用。比如说，我们想给某个人转一个价值几十亿刀的 NFT。难道我们不想确定我们不会弄丢这个 NFT 吗？ **非常确定** ? 我们在 Cadence 中能做到，因为在 Cadence 中是 ”非常非常难“ 丢失 Resource，除非我们真正的告诉它我们想要销毁。这也是 Cadence 的一个总的主题： **Cadence 让开发者很难出错，这是件好事**

下面是关于 Struct 和 Resource 区别的一些总结：

- Structs 是数据的容器，仅此而已
- Resource 是极其安全，不能被复制，易于追踪的不能被丢失的数据的容器。

## 一些编程的注意事项：

下面是一些你实际编程时要注意的点：

- 你只能用 `create` 关键字来创建 resource。`create` 关键字只能在合约中被调用。也就是说，你作为开发者，能够控制他们什么时候被创建。但这不适用于 Structs，Structs 可以在合约外创建。
- 在 resource 的类型前，你要使用 `@`符号，比如 `@Greeting`
- 要用 `<-` 来移动 resource
- 要用 `destroy` 来销毁 resource

## 不是很难吧？

你成功了！不是很难，对吧？我相信你能行。我们今天就到这里，明天继续！

## 任务

回答下面的问题：

1. 请用文字列举 3 个 Structs 为什么要和 resource 不同的原因。

2. 请表述一个 resource 比 struct 更适用的场景。

3. 创建一个新 resource 时的关键字是什么？

4. 我们能在在一个 script 或者 transaction 中创建 resource 吗？（假设有一个 public 的函数来创建）

5. 下面的这个 resource 类型是什么？

```cadence
pub resource Jacob {

}
```

6. 下面的代码中有四个错误，请修复他们

```cadence
pub contract Test {

    // Hint: There's nothing wrong here ;)
    pub resource Jacob {
        pub let rocks: Bool
        init() {
            self.rocks = true
        }
    }

    pub fun createJacob(): Jacob { // there is 1 here
        let myJacob = Jacob() // there are 2 here
        return myJacob // there is 1 here
    }
}
```
