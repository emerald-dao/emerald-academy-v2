---
title: Structs
language: en
layout: examples
---

# Structs

You can define your own structs that have data and functions inside of them.

They are useful for grouping together related data.

Structs can be defined inside contracts or scripts. A struct defined in a contract can be created anywhere.

```cadence
// Contract file: Art.cdc
// Deployed to 0x01
access(all) contract Art {

   // this will act as an 'id' for
   // new art pieces
   access(all) var totalArtPieces: Int
   access(all) let artPieces: {Int: ArtDetails}

   access(all) struct ArtDetails {
      access(all) let id: Int
      access(all) let name: String
      access(all) let artLink: String
      access(all) let hoursWorkedOn: Int

      // Like contracts, structs (and later - resources) 
      // must have an `init` function to initialzie their variables.
      init(id: Int, name: String, artLink: String, hoursWorkedOn: Int) {
         self.id = id
         self.name = name
         self.artLink = artLink
         self.hoursWorkedOn = hoursWorkedOn
      }
   }

   access(all) fun uploadArt(name: String, artLink: String, hoursWorkedOn: Int) {
      let id: Int = Art.totalArtPieces
      let newArtPiece = ArtDetails(id: id, name: name, artLink: artLink, hoursWorkedOn: hoursWorkedOn)
      // store the new art piece, mapped to its `id`
      self.artPieces[id] = newArt
      // increment the amount of art pieces by one
      Art.totalArtPieces = Art.totalArtPieces + 1
   }

   init() {
      self.totalArtPieces = 0
      self.artPieces = {}
   }
}
```

```cadence
// Transaction file: create_art_piece.cdc
import Art from 0x01

transaction(name: String, artLink: String, hoursWorkedOn: Int) {

   prepare(signer: &Account) {}

   execute {
      Art.uploadArt(name: name, artLink: artLink, hoursWorkedOn: hoursWorkedOn)
   }
}
```

```cadence
// Script file: read_art_piece.cdc
import Art from 0x01

// Returns an object that holds `ArtPiece` data.
// If the art piece with `id` does not exist, returns nil.
access(all) fun main(id: Int): Art.ArtPiece? {
   return Art.artPieces[id]
}
```