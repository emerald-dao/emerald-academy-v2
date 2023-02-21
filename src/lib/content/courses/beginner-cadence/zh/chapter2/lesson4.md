---
title: 基础的结构体 Structs
lesson: 4
language: zh
excerpt: 基础的结构体 Structs
---

# 第二章 第四天 - 基础的结构体 Structs

大家好，今天我们要来学习 Stucts！好消息是 Structs 非常简单易学，所以今天并不会花费很长时间！让我们开始吧！

## 视频

1. (Structs + Dictionaries & Optionals) - 视频从 12:10 开始看起到最后: <https://www.youtube.com/watch?v=LAUN7hqlL0w>

## Structs 结构体

什么是 Structs？Structs 是其他数据类型的容器。让我们来看一个例子。

```cadence
pub struct Profile {
    pub let firstName: String
    pub let lastName: String
    pub let birthday: String
    pub let account: Address

    // `init()` 创建Struct时被调用...
    // 你传入了4个变量来创建这个Struct.
    init(_firstName: String, _lastName: String, _birthday: String, _account: Address) {
        self.firstName = _firstName
        self.lastName = _lastName
        self.birthday = _birthday
        self.account = _account
    }
}
```

好的，这里发生了很多事情。究竟发生了什么？简单说，我们定义了一个新的类型叫做 `Profile`（用户信息）. 它是一个 Struct。正如你看到的这样，它包含 4 个数据。

1. 一个名字 (`firstName`)
2. 一个姓氏 (`lastName`)
3. 一个生日 (`birthday`)
4. 一个账户地址 (`account`)

当我们想把信息整理进一个容器的时候，创建一个 Struct 会很有帮助。

让我们来想一想为什么会很有帮助。比如，我们去 Flow Playground 里写一个新的 script 来返回某人的 profile 信息。我们怎么做呢？不用 Struct 的话，我们就只能返回一个包含所有信息的 String 类型的数组（`[String]`），把 `account` 变量转成 `String` 等等。这需要花很多功夫，且很痛苦。与之相对的，我们可以用返回一个 Profile Struct。让我们来看一个真实的例子。

注意，Structs 也有 `init()` 函数，会在创建 Struct 的时候被调用，与部署合约时调用的那个 `init()` 函数类似。此外，你会发现在 `init()` 函数，我倾向于在变量名钱使用”_“。这是我为了来区分真正的变量和初始化时的值。这个和隐式变量符的语法 `_` 不一样。不好意思让大家很困惑~

**重要**: Structs 只能用 `pub` 权限修饰符 (我们会在之后几天谈到). 让我们来看一个真实的例子。

## 真实的例子

我们首先来在账户 `0x01` 中部署一个新的合约。

```cadence
pub contract Authentication {

    pub var profiles: {Address: Profile}

    pub struct Profile {
        pub let firstName: String
        pub let lastName: String
        pub let birthday: String
        pub let account: Address

        // 你传入了4个变量来创建这个Struct.
        init(_firstName: String, _lastName: String, _birthday: String, _account: Address) {
            self.firstName = _firstName
            self.lastName = _lastName
            self.birthday = _birthday
            self.account = _account
        }
    }

    pub fun addProfile(firstName: String, lastName: String, birthday: String, account: Address) {
        let newProfile = Profile(_firstName: firstName, _lastName: lastName, _birthday: birthday, _account: account)
        self.profiles[account] = newProfile
    }

    init() {
        self.profiles = {}
    }

}
```

我在这里写了很多内容，但你现在其实已经了解他们了。让我们一个个来看一下他们：

1. 我们声明了一个新的合约名为 `Authentication`
2. 我们声明了一个 dictionary 名为 `profiles` 把 `Address` 类型映射到一个 `Profile` 类型
3. 我们声明了一个新的包含 4 个变量的 Struct 名为 `Profile`
4. 我们声明了一个新的函数 `addProfile` 用来接收 4 个变量，并用其创建一个新的 `Profile` . 然后它创建了一个这个账户的 `account` -> `Profile` 的映射。
5. 当合约部署时，初始化一个空的 `profiles` dictionary

如果你能弄懂这些事情，你已经成长了很多！如果你还有一点困惑，没有关系！我会回顾过去几天我们提到的一些概念。并且，请记住，你现在还不用知道 `pub` 是什么意思。

### 添加一个新的 Profile

现在我们定义了一个新的 Struct。让我们来看一看他的用途。

我们来打开一个新的 transaction，并把下面的这些 transaction 代码复制进去。

```cadence
import Authentication from 0x01

transaction() {

    prepare(signer: AuthAccount) {}

    execute {
        log("We're done.")
    }
}
```

好的，现在我们想要在 `Authentication` 合约中添加一个新的 profile 到 `profiles` dictionary。我们该怎么做呢？对，我们可以调用 `addProfile` 函数，传入所需的所有的变量，比如: `Authentication.addProfile(firstName: firstName, lastName: lastName, birthday: birthday, account: account)`。 但首先，我们需要从某个地方获取这些变量。我们可以通过 transaction 的变量把这些信息传过去，就像这样：

```cadence
import Authentication from 0x01

transaction(firstName: String, lastName: String, birthday: String, account: Address) {

    prepare(signer: AuthAccount) {}

    execute {
        Authentication.addProfile(firstName: firstName, lastName: lastName, birthday: birthday, account: account)
        log("We're done.")
    }
}
```

好了！我们可以用任何一个账户运行这笔交易，并把这个示例的数据传过去，就像这样：

<img src="/courses/beginner-cadence/txstuff.png" alt="drawing" size="400" />

### 读取我们的 profile

为了读取我们的新 profile，我们来打开一个 Script，把下面这段代码复制过去。

```cadence
import Authentication from 0x01

pub fun main() {

}
```

现在，让我们尝试读取我们的 profile。 我们可以把代表账户的 `Address` 传进去，因为我们已经在这个合约中有了 accounts -> `profiles` dictionary 的映射。我们可以从 dictionary 中返回 `Profile` 类型，就像这样：

```cadence
import Authentication from 0x01

pub fun main(account: Address): Authentication.Profile {
    return Authentication.profiles[account]
}
```

啊，Jacob 这里有一个报错！"mismatched types. expected `Authentication.Profile`, got `Authentication.Profile?`"， 但我们通过昨天的内容已经知道了该如何解决的这个问题。我们需要加上一个强制打开运算符，就像这样：

```cadence
import Authentication from 0x01

pub fun main(account: Address): Authentication.Profile {
    return Authentication.profiles[account]!
}
```

还请注意，这里返回的数据类型是 `Authentication.Profile`。这是因为我们返回的是在 `Authentication` 合约定义的 `Profile`。**数据类型都是基于他们被声明的合约的.** 就是这样！现在谁都可以调用这个 script 来获取所有的 profile 信息。Structs 是非常棒的!

## 任务

1. 部署一个包含你自己定义的一个 Struct 的合约。(必须与 `Profile` 不同).

2. 创建一个 dictionary 或者数组包含你定义的那个 Struct.

3. 创建一个添加到数组或者 dictionary 的函数.

4. 添加一个调用第三步中函数的交易。

5. 添加一个 script 来读取你定义的 struct.

这就是今天的全部内容，明天见！
