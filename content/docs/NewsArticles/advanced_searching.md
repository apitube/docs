---
sidebar_position: 10
slug: '/news-api/advanced-searching'
---

# Advanced searching

## Example queries

| Query                                     | Describe                                                                  |
|-------------------------------------------|---------------------------------------------------------------------------|
| Musk                                      | Article contains 'Musk' keyword                                           |
| Musk AND Tesla                            | Article contains 'Musk' and 'Tesla' keywords                              |
| Musk OR Tesla                             | Article contains 'Musk' or 'Tesla' keywords                               |
| Musk NOT Tesla                            | Article contains 'Musk' but not 'Tesla' keywords                          |
| Musk AND (Tesla OR SpaceX)                | Article contains 'Musk' and ('Tesla' or 'SpaceX') keywords                |
| Musk AND NOT (Tesla OR SpaceX)            | Article contains 'Musk' and not ('Tesla' or 'SpaceX') keywords            |
| Musk AND (Tesla OR SpaceX) AND NOT (Elon) | Article contains 'Musk' and ('Tesla' or 'SpaceX') but not 'Elon' keywords |
