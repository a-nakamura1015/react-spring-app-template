package com.example.app.controller;

import com.example.app.model.User;
import com.example.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

  private final UserRepository userRepository;

  public UserController(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  // GET 全てのユーザーを取得
  @GetMapping
  public List<User> getAllUsers() {
    return userRepository.findAll();
  }

  // GET 特定のユーザーをIDで取得
  @GetMapping("/{id}")
  public ResponseEntity<User> getUserById(@PathVariable Long id) {
    Optional<User> user = userRepository.findById(id);
    return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
  }

  // POST 新しいユーザーを作成
  @PostMapping
  public User createUser(@RequestBody User user) {
    return userRepository.save(user);
  }

  // PUT ユーザー情報を更新
  @PutMapping("/{id}")
  public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
    Optional<User> user = userRepository.findById(id);
    if (user.isPresent()) {
      User updatedUser = user.get();
      updatedUser.setName(userDetails.getName());
      updatedUser.setEmail(userDetails.getEmail());
      return ResponseEntity.ok(userRepository.save(updatedUser));
    } else {
      return ResponseEntity.notFound().build();
    }
  }

  // DELETE ユーザーを削除
  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
    Optional<User> user = userRepository.findById(id);
    if (user.isPresent()) {
      userRepository.delete(user.get());
      return ResponseEntity.ok().build();
    } else {
      return ResponseEntity.notFound().build();
    }
  }
}
